const Rating = {
    render: (props) => 
    {
        if(!props.value) {
            return '<div></div>'
        }
        return `
        <div class="rating">
            <span>
                <i class></i>
            </span>
        </div>`
    }
}