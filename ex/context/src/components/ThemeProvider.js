import React ,{useState} from 'react';


const themes = {
    light:{
        color:'#000000',
        backgroundColor:'#eeeeee'
    },
    dark:{
        color:'#ffffff',
        backgroundColor:'#555555'
    }
};



export const ThemeContext = React.createContext(themes.dark);


export function ThemeProvider(props) {
    const [theme, setTheme]=useState(themes.dark)

    const chageTheme = ()=>{
        const newTheme = theme === themes.light?themes.dark:themes.light; 
        setTheme(newTheme);
    };
    return (
        <ThemeContext.Provider value={{theme, chageTheme}}>
            {props.children}
        </ThemeContext.Provider>
            
    );
}
