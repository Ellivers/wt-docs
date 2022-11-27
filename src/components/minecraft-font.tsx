import React, { ReactNode } from "react"
import styles from './styles.module.css'
import tinycolor from 'tinycolor2'

interface props {
    color?: string,
    children?: ReactNode
}

const colors: {[key: string]: string} = {
    green: '#55FF55',
    aqua: '#55FFFF',
    dark_aqua: '#00AAAA',
    yellow: '#FFFF55',
    gold: '#FFAA00',
    blue: '#5555FF',
    dark_blue: '#0000AA',
    light_purple: '#FF55FF',
    red: '#FF5555',
    gray: '#AAAAAA',
    dark_purple: '#AA00AA',
    dark_green: '#00AA00',
}

const MCFont = (props: props) => {
    const color = colors[props.color] || props.color || 'white';

    return (
        <code className={styles.mcfont} style={{color: color, textShadow: `1.625px 1.625px 0 ${tinycolor(color).darken(55).toString()}`}}>
            {props.children}
        </code>
    )
}

export default MCFont;
