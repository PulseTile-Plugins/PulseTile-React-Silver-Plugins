import _ from 'lodash/fp';

export const fetchPatientClinicalStatementsTagsOnMount = ({
  componentDidMount() {
    const { actions, match } = this.props;
    const userId = _.get('params.userId', match);
    if (userId) actions.fetchPatientClinicalStatementsTagsRequest({ userId });
  },
});