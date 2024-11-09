import { BsCodeSlash, BsClipboardData, BsPencil } from 'react-icons/bs'
import { FaInternetExplorer, FaCameraRetro, FaVideo, FaRegNewspaper, FaAppStore, FaSearch } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'

export const servicesData = [
    {
        id: 'ie',
        title: 'Internet Research',
        icon: <FaInternetExplorer />,
    },
    {
        id: 'sde',
        title: 'Software Enginner',
        icon: <MdDeveloperMode />,
    },
    {
        id: 'appDev',
        title: 'App Development',
        icon: <FaAppStore />,
    },

    {
        id: 'webDev',
        title: 'Web Development',
        icon: <BsCodeSlash />,
    },
    {
        id: 'figma',
        title: 'Figma',
        icon: <BsPencil />,
    },
    {
        id: 'seo',
        title: 'SEO',
        icon: <FaSearch />,
    },
    {
        id: 'photo',
        title: 'Photography',
        icon: <FaCameraRetro />,
    },

    {
        id: 'video',
        title: 'Video Editing',
        icon: <FaVideo />,
    },
    {
        id: 'de',
        title: 'Data Entry',
        icon: <BsClipboardData />,
    },
    {
        id: 'bp',
        title: 'Blog Posting',
        icon: <FaRegNewspaper />,
    },
]

// Uncomment your required service.
// Couldn't find the required services? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
// You can also add on your own 😉.
