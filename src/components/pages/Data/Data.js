export const columns = [
    { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', type: 'number' },
    { field: 'customer_id', headerName: 'Customer ID', flex: 1, align: 'center', headerAlign: 'center', type: 'number' },
    { field: 'customer_Name', headerName: 'Customer Name', flex: 1, align: 'center', headerAlign: 'center', type: 'string' },
    { field: 'date', headerName: 'Date', flex: 1, align: 'center', headerAlign: 'center', type: 'date', valueFormatter: (value) => new Date(value).toLocaleDateString() },
    { field: 'amount', headerName: 'Amount', flex: 1, align: 'center', headerAlign: 'center', type: 'number' }
];

export const Transactions = [
    {
        "id": 1,
        "customer_id": 1,
        "date": "2022-01-01",
        "amount": 1000
    },
    {
        "id": 2,
        "customer_id": 1,
        "date": "2022-01-02",
        "amount": 2000
    },
    {
        "id": 3,
        "customer_id": 2,
        "date": "2022-01-01",
        "amount": 550
    },
    {
        "id": 4,
        "customer_id": 3,
        "date": "2022-01-01",
        "amount": 500
    },
    {
        "id": 5,

        "customer_id": 2,
        "date": "2022-01-02",
        "amount": 1300
    },
    {
        "id": 6,
        "customer_id": 4,
        "date": "2022-01-01",
        "amount": 750
    },
    {
        "id": 7,
        "customer_id": 3,
        "date": "2022-01-02",
        "amount": 1250
    },
    {
        "id": 8,
        "customer_id": 5,
        "date": "2022-01-01",
        "amount": 2500
    },
    {
        "id": 9,
        "customer_id": 5,
        "date": "2022-01-02",
        "amount": 875
    },
    {
        "id": 10,
        "customer_id": 4,
        "date": "2022-01-02",
        "amount": 1000
    },
    {
        "id": 11,
        "customer_id": 1,
        "date": "2022-01-03",
        "amount": 1900
    },
    {
        "id": 12,
        "customer_id": 2,
        "date": "2022-01-03",
        "amount": 2400
    },
    {
        "id": 13,
        "customer_id": 3,
        "date": "2022-01-03",
        "amount": 5500
    },
    {
        "id": 14,
        "customer_id": 4,
        "date": "2022-01-03",
        "amount": 1750
    },
    {
        "id": 15,
        "customer_id": 5,
        "date": "2022-01-03",
        "amount": 3500
    }
]

export const Customers = [
    {
        "id": 1,
        "name": "Ahmed Ali"
    },
    {
        "id": 2,
        "name": "Aya Elsayed"
    },

    {
        "id": 3,
        "name": "Mina Adel"
    },
    {
        "id": 4,
        "name": "Sarah Reda"
    },
    {
        "id": 5,
        "name": "Mohamed Sayed"
    }
]