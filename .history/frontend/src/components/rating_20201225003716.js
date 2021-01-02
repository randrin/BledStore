const Rating = {
    render: (props) => 
    {
        if(!props.value) {
            return '<div></div>'
        }
        return `
        <div class="rating">
            <span>
                <i class="${props.value >= 1 ? 'f' props.value >= 0.5 ? }"></i>
            </span>
        </div>`
    }
}