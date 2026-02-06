// Seeded random function for deterministic values
function seededRandom(seed: number): number {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

export const commoditiesData = Array.from({ length: 100 }, (_, i) => {
    const names = [
        'Electrical Machinery', 'Mechanical Appliances', 'Textiles', 'Plastics', 'Iron & Steel',
        'Vehicles', 'Mineral Fuels', 'Chemicals', 'Footwear', 'Furniture',
        'Optical Instruments', 'Rubber', 'Paper', 'Aluminum', 'Glassware',
        'Copper', 'Dairy Products', 'Cereals', 'Beverages', 'Pharmaceuticals'
    ];
    const codes = [
        '85', '84', '62', '39', '72',
        '87', '27', '29', '64', '94',
        '90', '40', '48', '76', '70',
        '74', '04', '10', '22', '30'
    ];
    return {
        name: names[i % 20] + (i >= 20 ? ` Commodity ${i + 1}` : ''),
        size: parseFloat((seededRandom(i * 100) * 90 + 5).toFixed(1)),
        code: codes[i % 20],
        fill: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#A8D8EA'][i % 8],
        growth: (seededRandom(i * 200) > 0.5 ? '+' : '-') + (seededRandom(i * 300) * 15).toFixed(1) + '%'
    };
}).sort((a, b) => b.size - a.size);

export const partnersData = Array.from({ length: 100 }, (_, i) => {
    const countries = [
        'China', 'South Korea', 'Japan', 'Taiwan', 'USA', 'Thailand', 'Malaysia', 'Germany', 'Australia', 'Indonesia',
        'India', 'Russia', 'Brazil', 'Canada', 'France', 'UK', 'Italy', 'Singapore', 'Spain', 'Mexico'
    ];
    const value = (seededRandom(i * 400) * 130 + 1).toFixed(1);
    return {
        rank: i + 1,
        country: countries[i % 20] + (i >= 20 ? ` Partner ${i + 1}` : ''),
        value: `$${value} Bn`,
        share: `${(seededRandom(i * 500) * 25).toFixed(1)}%`,
        growth: (seededRandom(i * 600) > 0.5 ? '+' : '-') + (seededRandom(i * 700) * 10).toFixed(1) + '%',
        isPositive: seededRandom(i * 800) > 0.3
    };
}).sort((a, b) => parseFloat(b.value.replace('$', '')) - parseFloat(a.value.replace('$', '')));

export const trendsData = [
    { month: 'January', value: 38.5, growth: '+2.4%' },
    { month: 'February', value: 41.2, growth: '+7.0%' },
    { month: 'March', value: 39.8, growth: '-3.4%' },
    { month: 'April', value: 42.5, growth: '+6.8%' },
    { month: 'May', value: 44.1, growth: '+3.8%' },
    { month: 'June', value: 43.6, growth: '-1.1%' },
    { month: 'July', value: 46.2, growth: '+6.0%' },
    { month: 'August', value: 48.9, growth: '+5.8%' },
    { month: 'September', value: 47.5, growth: '-2.9%' },
    { month: 'October', value: 50.2, growth: '+5.7%' },
    { month: 'November', value: 52.8, growth: '+5.2%' },
    { month: 'December', value: 55.4, growth: '+4.9%' },
];

export const portsData = Array.from({ length: 50 }, (_, i) => ({
    name: ['Cat Lai', 'Hai Phong', 'Da Nang', 'Cai Mep', 'Quy Nhon', 'Vung Tau', 'Can Tho', 'Nha Trang', 'Phu My', 'Dong Nai'][i % 10] + (i >= 10 ? ` Port ${i + 1}` : ''),
    value: Math.floor(seededRandom(i * 900) * 40000 + 1000),
    share: `${(seededRandom(i * 1000) * 30).toFixed(1)}%`,
    color: ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'][i % 5]
})).sort((a, b) => b.value - a.value);

export const importersData = Array.from({ length: 100 }, (_, i) => ({
    name: [
        'Samsung Electronics Vietnam', 'Intel Products Vietnam', 'Microsoft Vietnam Operations', 'LG Electronics Vietnam',
        'Panasonic Industrial Devices', 'Canon Vietnam Co., Ltd.', 'Foxconn Vietnam', 'Pegatron Vietnam',
        'Compal Vietnam', 'Luxshare-ICT Vietnam'
    ][i % 10] + ` ${['Thai Nguyen', 'HCMC', 'Bac Ninh', 'Hai Phong', 'Da Nang'][i % 5]} Branch ${i + 1}`,
    value: parseFloat((seededRandom(i * 1100) * 16000 + 500).toFixed(2)),
    percent: parseFloat((seededRandom(i * 1200) * 4).toFixed(2))
})).sort((a, b) => b.value - a.value);

export const suppliersData = Array.from({ length: 100 }, (_, i) => ({
    name: [
        'Shenzhen Technology Corp', 'Guangzhou Electronics Ltd', 'Tokyo Precision Tools', 'Seoul Semiconductor',
        'Taipei Chip Manufacturing', 'Silicon Valley Components', 'Munich Industrial GmbH', 'Singapore Logistics Pte',
        'Bangkok Plastics Co', 'Osaka Optical Ltd'
    ][i % 10] + ` Global Supplier ${i + 1}`,
    value: parseFloat((seededRandom(i * 1300) * 12000 + 400).toFixed(2)),
    percent: parseFloat((seededRandom(i * 1400) * 3).toFixed(2))
})).sort((a, b) => b.value - a.value);
