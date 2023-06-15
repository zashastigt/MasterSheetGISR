export default function GetFilterButton(key, label, url){
    return (
        <label key={key} htmlFor={`#${key}`}>
            <input type="checkbox" value={key} id={key} />
            <img alt={label} className="element" src={url} />
            <span>{label}</span>
        </label>
    )
}