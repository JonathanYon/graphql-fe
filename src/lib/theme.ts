import { CSSObject, experimental_sx, SxProps as MuiSxProps, createStyled, Theme } from "@mui/system"
import {createTheme} from "@mui/material/styles"
import { SxProps } from "@mui/system"

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        gray: true
    }
}


export const fontFamily = ['Mulish', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')

let theme = createTheme({
    palette: {},
    typography: {
        fontFamily,
        button: {fontWeight: 700}

    }
})

theme = createTheme(theme, {
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(2),
                    '&:last-child': {
                        paddingBottom: theme.spacing(2)
                    }
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                standardInfo: {
                    backgroundColor: theme.palette.info.main,
                    '& svg': {
                        color: "red"
                    }
                }
            }
        }
    }
})

export default theme

export type MyCustomTheme = typeof theme;
export type sxProps = MuiSxProps<Theme>
export type SxStyle = Exclude<SxProps, ReadonlyArray<unknown>>
export type SxStyles = {[key: string]: SxStyle};

/**
 * Create object literal for named styles.
 * 
 * The function does not do anything, but only helps Typescript
 * to narrow the object literal with its keys
 */
export function makeSxStyles<T extends SxStyles>(styles: T): T {
    return styles
}

export function sx(styles: SxProps): CSSObject {
    return experimental_sx<MyCustomTheme>(styles)
}

export function sxArray(sx?: SxProps): Array<boolean | SxStyle> {
    if(sx === undefined) return []
    if(Array.isArray(sx)) return sx
    return [sx as boolean | SxStyle]
}

export const styled = createStyled({defaultTheme: theme})