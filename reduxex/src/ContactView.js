export default function ContactView({contact, delEvent}) {
    return <div>
        {contact.name} &nbsp; {contact.email} 
        <button type="button" onClick={() => delEvent()}>&times;</button>
    </div>
}