import Link from "next/link"

const Header = ({title,linkHref,linkTitle}) => {
    return (
        <div className=' flex justify-between items-center px-4 md:pt-4 sm:pt-3 pt-2 bg-color-secondary rounded-t-lg'>
            <h1 className='md:text-lg sm:text-sm text-xs text-color-primary bg-color-dark-3 font-bold py-1 md:px-3 px-2 rounded-t-xl'>{title}</h1>
            {linkHref && linkTitle?
                <Link href={linkHref} className='md:text-lg sm:text-md text-sm underline text-color-dark-2 md:py-1 md:px-3 px-2 hover:text-color-primary transition-all' >{linkTitle}</Link>
                : null
            }
        </div>
    )
}

export default Header