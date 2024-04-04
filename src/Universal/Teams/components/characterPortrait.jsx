import React from "react";

export default function CharacterPortrait(props) {
    const GIElement = import.meta.glob('../../../assets/GenshinElementImgs/*.svg', { eager: true })
    const getImage = (icon) => (`https://api.ambr.top/assets/UI/${icon}.png`)
    const addElement = () => {
        switch (props.fullList[props.character].element) {
            case 'Wind':
                return GIElement['../../../assets/GenshinElementImgs/anemo.svg'].default
            case 'Ice':
                return GIElement['../../../assets/GenshinElementImgs/cryo.svg'].default
            case 'Grass':
                return GIElement['../../../assets/GenshinElementImgs/dendro.svg'].default
            case 'Electric':
                return GIElement['../../../assets/GenshinElementImgs/electro.svg'].default
            case 'Rock':
                return GIElement['../../../assets/GenshinElementImgs/geo.svg'].default
            case 'Water':
                return GIElement['../../../assets/GenshinElementImgs/hydro.svg'].default
            case 'Fire':
                return GIElement['../../../assets/GenshinElementImgs/pyro.svg'].default
        }
    }

    return(
        <div id={'characterPortrait'} style={{borderColor: props.borderColor}} onClick={props.clickFunction}>
            <img className={'elementImg'} alt={'elem'} src={addElement()} />
            <img draggable={false} className={'characterImg'} alt={'pic'} src={getImage(props.fullList[props.character].icon)} />
            <div>{props.fullList[props.character].name}</div>
        </div>
    )

}