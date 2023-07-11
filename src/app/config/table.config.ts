const config = {
    parties: [
        {
            title: 'Party ID',
            dataIndex: '_id',
            key: '_id',
            align: 'center'
        },
        {
            title: 'Acronym',
            dataIndex: 'acronym',
            key: 'acronym',
            align: 'center'
        },
        {
            title: 'Party Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
    ],
    candidates: [
        {
            title: 'Candidate ID',
            dataIndex: '_id',
            key: '_id',
            align: 'center'
        },
        {
            title: 'Candidate Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
        {
            title: 'Party Name',
            dataIndex: 'party',
            key: 'party',
            align: 'center'
        },
        {
            title: 'District',
            dataIndex: 'district',
            key: 'district',
            align: 'center'
        },
    ],
    voters: [
        {
            title: 'Voter ID',
            dataIndex: '_id',
            key: '_id',
            align: 'center'
        },
        {
            title: 'Voter Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            align: 'center'
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            align: 'center'
        },
        {
            title: 'District',
            dataIndex: 'district',
            key: 'district',
            align: 'center'
        },
    ],
    votes: [
        {
            title: 'Vote ID',
            dataIndex: '_id',
            key: '_id',
            align: 'center'
        },
        {
            title: 'Voter ID',
            dataIndex: 'voter_id',
            key: 'voter_id',
            align: 'center'
        },
        {
            title: 'Party ID',
            dataIndex: 'party_id',
            key: 'party_id',
            align: 'center'
        },
        {
            title: 'Candidate ID',
            dataIndex: 'candidate_id',
            key: 'candidate_id',
            align: 'center'
        },
        {
            title: 'Voted Time',
            dataIndex: 'voted_time',
            key: 'voted_time',
            align: 'center'
        },
        {
            title: 'District',
            dataIndex: 'district',
            key: 'district',
            align: 'center'
        },
    ],
};

export default config;
