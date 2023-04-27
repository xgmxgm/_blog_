import {useContext} from 'react'
import { ThemeContext } from '../provider/ThemeProvider'


const useTheme = () => {
    const value = useContext(ThemeContext)

    return value
}

export default useTheme