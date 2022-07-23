import './style.css'
export default function Tooltips({ text, component }) {
  return (
    <div className="tooltip">
      {component}
      <span className="tooltiptext">{text}</span>
    </div>
  )
}
