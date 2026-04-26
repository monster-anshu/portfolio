import {
    SpinLoader,
    TextInput,
    usePipecatConnectionState,
    usePipecatConversation,
    PipecatAppBase,
    ConsoleTemplate,
    WidgetTemplate,
} from '@pipecat-ai/voice-ui-kit'
import { PipecatClientMicToggle } from '@pipecat-ai/client-react'
import { LiveKitTransport } from './liveKitTransport'
import { useState, useEffect, useRef, useMemo, useCallback, Fragment } from 'react'

import { FaMicrophone, FaMicrophoneSlash, FaPhoneSlash, FaRobot, FaUser, FaComments } from 'react-icons/fa'
import { AiOutlineLoading3Quarters, AiOutlineClose } from 'react-icons/ai'

import { themeData } from '../../data/themeData'
import styles from './VoiceAgent.module.css'
import '@pipecat-ai/voice-ui-kit/styles'
const theme = themeData.theme

const voiceAgentWebrtcEndpoint = process.env.NEXT_PUBLIC_VOICE_AGENT_WEBRTC_ENDPOINT || ''

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/**
 * Extract display text from a ConversationMessagePart.
 * User messages  → part.text is a plain string
 * Assistant msgs → part.text is BotOutputText { spoken, unspoken }
 *   We only use `spoken` (TTS-confirmed text) to avoid duplication.
 */
const extractPartText = (part) => {
    const t = part?.text
    if (typeof t === 'string') return t
    if (t && typeof t === 'object' && 'spoken' in t) {
        return t.spoken || ''
    }
    return ''
}

/* ─────────────── inner call UI ─────────────── */
const Runner = ({ client, handleConnect, handleDisconnect, error, onClose }) => {
    const connectionState = usePipecatConnectionState()
    const { messages } = usePipecatConversation({
        textMode: 'tts',
    })

    const isThinking = useMemo(() => {
        if (!connectionState.isConnected || messages.length === 0) return false
        const last = messages[messages.length - 1]
        if (last.role === 'user') return true
        if (last.role === 'assistant' && last.final === false) return true
        return false
    }, [connectionState.isConnected, messages])

    const [callDuration, setCallDuration] = useState(0)
    const startTimeRef = useRef(null)
    const timerRef = useRef(null)
    const hasStartedRef = useRef(false)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        if (!connectionState.isConnected) {
            if (timerRef.current) clearInterval(timerRef.current)
            timerRef.current = null
            return
        }
        if (!hasStartedRef.current) {
            hasStartedRef.current = true
            startTimeRef.current = Date.now()
        }
        timerRef.current = setInterval(() => {
            if (!startTimeRef.current) return
            setCallDuration(Math.floor((Date.now() - startTimeRef.current) / 1000))
        }, 1000)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [connectionState.isConnected])

    // auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isThinking])

    if (error) {
        return <div className={styles.errorCard}>{error}</div>
    }

    /* ---- not connected: show connect prompt ---- */
    if (!connectionState.isConnected && !connectionState.isConnecting) {
        return (
            <div className={styles.connectScreen}>
                <button className={styles.closeBtnAbsolute} onClick={() => onClose?.()} aria-label="Close voice assistant">
                    <AiOutlineClose />
                </button>
                <div className={styles.connectIcon}>
                    <FaRobot />
                </div>
                <div className={styles.connectTitle}>Talk to my AI Assistant</div>
                <div className={styles.connectDesc}>Have a real-time voice conversation. Ask about my work, projects, or anything else!</div>
                <button className={styles.connectBtn} onClick={() => handleConnect?.()}>
                    <FaMicrophone /> Start Conversation
                </button>
            </div>
        )
    }

    if (connectionState.isConnecting) {
        return (
            <div className={styles.connectScreen}>
                <button className={styles.closeBtnAbsolute} onClick={() => onClose?.()} aria-label="Close voice assistant">
                    <AiOutlineClose />
                </button>
                <div className={styles.connectIcon}>
                    <AiOutlineLoading3Quarters className={styles.spinIcon} />
                </div>
                <div className={styles.connectTitle}>Connecting…</div>
                <div className={styles.connectDesc}>Setting up a secure voice channel</div>
            </div>
        )
    }

    /* ---- connected: full call UI ---- */
    return (
        <>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.statusBadge}>
                    <div
                        className={`${styles.statusDot} ${connectionState.isConnected ? styles.statusDotConnected : styles.statusDotDisconnected}`}
                    />
                    <span className={styles.timer}>{formatTime(callDuration)}</span>
                </div>
                <div className={styles.headerActions}>
                    <button className={styles.disconnectBtn} onClick={() => handleDisconnect?.()}>
                        <FaPhoneSlash />
                        Disconnect
                    </button>
                    <button className={styles.closeBtn} onClick={() => onClose?.()} aria-label="Close voice assistant">
                        <AiOutlineClose />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className={styles.messagesArea}>
                {messages
                    .filter((m) => m.role !== 'system')
                    .map((message) => {
                        const text = message.parts?.map(extractPartText).join('') || ''
                        if (!text.trim()) return null
                        const isAssistant = message.role === 'assistant'

                        return (
                            <div
                                key={message.createdAt}
                                className={`${styles.messageRow} ${isAssistant ? styles.messageRowAssistant : styles.messageRowUser}`}
                            >
                                {isAssistant && (
                                    <div className={`${styles.avatar} ${styles.avatarBot}`}>
                                        <FaRobot />
                                    </div>
                                )}
                                <div className={`${styles.bubble} ${isAssistant ? styles.bubbleAssistant : styles.bubbleUser}`}>{text}</div>
                                {!isAssistant && (
                                    <div className={`${styles.avatar} ${styles.avatarUser}`}>
                                        <FaUser />
                                    </div>
                                )}
                            </div>
                        )
                    })}

                {isThinking && (
                    <div className={styles.thinkingRow}>
                        <div className={`${styles.avatar} ${styles.avatarBot}`}>
                            <FaRobot />
                        </div>
                        <div className={styles.thinkingBubble}>
                            <AiOutlineLoading3Quarters className={styles.spinIcon} />
                            <span>Thinking…</span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Text input - outside scroll area */}
            <div className={styles.textInputWrapper}>
                <TextInput classNames={{ container: styles.textInputContainer }} placeholder="Type your message…" size="sm" />
            </div>

            {/* Mic controls */}
            <div className={styles.controls}>
                <div className={styles.controlsInner}>
                    <div className={styles.micGlow} />
                    <div className={styles.micRing}>
                        <PipecatClientMicToggle>
                            {({ isMicEnabled, onClick }) => (
                                <button
                                    onClick={onClick}
                                    className={`${styles.micBtn} ${!isMicEnabled ? styles.micBtnMuted : ''}`}
                                    aria-label={isMicEnabled ? 'Mute mic' : 'Unmute mic'}
                                >
                                    {isMicEnabled ? <FaMicrophone /> : <FaMicrophoneSlash />}
                                </button>
                            )}
                        </PipecatClientMicToggle>
                    </div>
                    <p className={styles.controlHint}>{connectionState.isConnected ? 'Tap to mute / unmute' : 'Connect to start'}</p>
                </div>
            </div>
        </>
    )
}

/* ─────────────── wrapper with floating button ─────────────── */
const VoiceBotRunner = () => {
    const [isOpen, setIsOpen] = useState(false)
    // Increment sessionKey each time modal opens so PipecatAppBase + transport are fully recreated
    const [sessionKey, setSessionKey] = useState(0)

    // const authUrl = voiceAgentWebrtcEndpoint;
    const authUrl = 'http://server-2.himanshu-gunwant.com/api/v1/voice-agent/offer'

    /* CSS custom-property bridge so the module CSS can use the theme */
    const themeVars = {
        '--va-primary': theme.primary,
        '--va-secondary': theme.secondary,
        '--va-tertiary': theme.tertiary,
        '--va-tertiary50': theme.tertiary50,
        '--va-tertiary70': theme.tertiary70,
    }

    const handleOpen = useCallback(() => {
        setSessionKey((k) => k + 1)
        setIsOpen(true)
    }, [])

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const handleOverlayClick = useCallback(
        (e) => {
            if (e.target === e.currentTarget) handleClose()
        },
        [handleClose]
    )

    return (
        <div style={themeVars}>
            {/* Floating Action Button */}
            {!isOpen && (
                <>
                    <div className={styles.fabPulse} />
                    <button className={styles.fab} onClick={handleOpen} aria-label="Talk to AI assistant">
                        <FaComments />
                    </button>
                </>
            )}

            {/* Modal */}
            {isOpen && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                    <div className={styles.modal}>
                        <PipecatAppBase
                            key={sessionKey}
                            transportType="smallwebrtc"
                            clientOptions={{
                                transport: new LiveKitTransport({
                                    authUrl,
                                }),
                                enableMic: false,
                                enableCam: false,
                            }}
                            noThemeProvider={true}
                            initDevicesOnMount={true}
                        >
                            {(props) =>
                                props.client ? (
                                    <Runner {...props} onClose={handleClose} />
                                ) : (
                                    <div className={styles.loadingScreen}>
                                        <SpinLoader />
                                    </div>
                                )
                            }
                        </PipecatAppBase>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VoiceBotRunner
