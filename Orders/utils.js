export const fetchListOrdersOnMount = ({
    componentDidMount() {
        this.props.actions.fetchListOrdersRequest();
    },
});
