import react from "react"

const CreateForm = ({handleCreate,title,setTitle,author,setAuthor,url,setUrl})=>(
    <form onSubmit={handleCreate}>
            <div>
                Title: 
                <input
                type="text"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
                />
            </div>
            <div>
                Author:
                <input
                type="text"
                value={author}
                onChange={({ target }) => setAuthor(target.value)}
                />
            </div>
            <div>
                Url:
                <input
                type="text"
                value={url}
                onChange={({ target }) => setUrl(target.value)}
                />
            </div>
            <button type="submit">create</button>
    </form>)

export default CreateForm;