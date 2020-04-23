class news extends App {
    
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    myApp(){
        fetch("http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=23f9a3f2afb04126aa566d12cc718e33")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    id: result.id
                });
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    render(){
        const {error, isLoaded, items} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if (!isLoad){
            return <div>Loading...</div>;
        }else{
            return(
                <ul>
                {id.map(id=> (
                    <li key={"23f9a3f2afb04126aa566d12cc718e33"}
                    </li>
                    ))}
                    </ul>
                );
        }
        }
    }
