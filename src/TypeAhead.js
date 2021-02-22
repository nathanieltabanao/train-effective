import './TypeAhead.css'
import { useState} from 'react'

function TypeAhead() {
    const [state, setState] = useState({
      input: '',
      isShow: true,
      user: {
        avatar_url: '',
        login: ''
      },
      error: false
    })

    const inputChange = (e) => {
      setState({
        input: e.target.value})
      console.log('state: input', state.input, 'e.target.value', e.target.value)
      console.log(apiCall());
    }
  
    const selectOption = (user) => {
      const { download_url, name } = user
      setState({ ...state, input: name, isShow: false, image: download_url })
    }

    const apiCall = () => {
      fetch(`https://api.github.com/users/${state.input}`)
      .then( response => response.json())
      .then( data => { 
          const { avatar_url, login } = data
          setState({ 
              ...state,
              user: { avatar_url, login },
              error: false
          })
          .console.log(avatar_url)
      })
      .catch(e => {
          setState({...state,error: true})
          console.log('error', e.message)
      })
    }
  
  
    return (
        <div className="typeahead">
            <input 
              type="text" 
              id="input" 
              value={state.input} 
              onChange={inputChange} 
              />
            
            <div className="typeahead-content">
                {
                    (state.input && state.isShow) && (
                    <div
                        onClick={() => selectOption(state.user.login)} 
                        className="typeahead-content-list"
                      >
                        <img 
                          className="typeahead-content-list-image"  
                          src={state.user.avatar_url} alt={`${state.user.avatar_url}`}
                          />
                        <span className="typeahead-content-list-name">{state.user.login}</span>
                    </div>
                    )
                }
            </div>
        </div>
        
        )
    }
    
    
export default TypeAhead;