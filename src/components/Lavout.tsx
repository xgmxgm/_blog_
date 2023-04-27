import React from 'react'
import cn from "classnames"
import useTheme from '../hooks/useTheme';

type Props = {
    children: React.ReactNode;
}

const Lavout: React.FC<Props> = ({ children }) => {
    const {isDark} = useTheme()

    return (
        <div className={cn('layout', {
            dark: isDark,
        })}>
            {children}
        </div>
    )
}

export default Lavout