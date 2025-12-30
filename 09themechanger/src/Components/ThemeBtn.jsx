import React from 'react'
import useTheme from '../Contexts/theme';

export default function ThemeBtn() {
    
    const {themeMode,lighttheme,darktheme}=useTheme() //custom hook which returns useContext(Themecontext)..themecontext has 3 variable or fn in it made using create context
    const onchangebtn=(e)=>{ //whenever button is toggled then this fn is called
        const darkmodestatus=e.currentTarget.checked
        if(darkmodestatus)darktheme()
        else lighttheme()
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onchangebtn}
                checked={themeMode==="dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

