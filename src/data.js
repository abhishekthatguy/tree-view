
export default {
    name: 'Site',
    id: 1,
    toggled: true,
    children: [
        {
            name: 'Site-1',
            children: [
                { name: 'Location-1' },
                { name: 'Location-2' },
                { name: 'Location-3' },
                { name: 'Location-4' },
                { name: 'Location-5' }
            ]
        },
        {
            name: 'Site-2',
            loading: true,
            children: []
        },
        {
            name: 'Site-3',
            children: [
                {
                    name: 'Location-1',
                    children: [
                        { name: 'Building-1',
                        children: [
                        { name: 'Floor-1' },
                        { name: 'Floor-2' ,
                    
                    children: [
                        { name: 'Assets@998657',
                        batchId:"123DSP",
                        children: [
                        { name: 'Temprature-1' },
                        { name: 'Pressure-2' },
                        { name: 'Pressure-2' }
                    ]
                      
                      },
                        { name: 'Building-2' }
                    ]
                    }
                    ]
                      
                      },
                        { name: 'Building-2' }
                    ]
                },
                { name: 'Location-2' }
            ]
        },
        {
            name: 'Site-3',
            children: [
                { name: 'Location-1' },
                { name: 'Location-2' }
            ]
        },
        { name: 'Site-4' },
        { name: 'Site-5' },
        { name: 'Site-6' }
    ]
};