import { Link } from 'react-router-dom'
import './PageHeader.css'
import {MdOutlineNavigateNext} from 'react-icons/md'

const PageHeader = ({pagename}) => {
  return (
    <div className="pageheader__container">
        <div className="pageheader__nav">
            <Link to='/'>Home</Link>
            <MdOutlineNavigateNext />
            <span>{pagename}</span>
        </div>
        <h3>{pagename}</h3>
    </div>
  )
}

export default PageHeader