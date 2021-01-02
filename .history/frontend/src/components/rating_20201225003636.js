const Rating = {
    render: (props) => 
    {
        if(!props.value) {
            return '<div></div>'
        }
        return `
        <div class="rating">
            <span>
                <i class="${props.value >= 1}"></i>
            </span>
        </div>`
    }
}