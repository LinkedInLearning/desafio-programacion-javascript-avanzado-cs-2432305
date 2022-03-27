
const zonasHorarias = [
    {
        "offset": -10,
        "texto": "(UTC-10:00) Hawaii",
    },
    {
        "offset": -6,
        "texto": "(UTC-06:00) Central America",
    },
    {
        "offset": -8,
        "texto": "(UTC-09:00) Alaska",
    },
    {
        "offset": -7,
        "texto": "(UTC-07:00) Pacific Daylight Time (US & Canada)",
    },
    {
        "offset": -7,
        "texto": "(UTC-07:00) Arizona",
    },
    {
        "offset": 1,
        "texto": "(UTC) Dublin, Lisbon",
    },
    {
        "offset": 0,
        "texto": "(UTC) Greenwich Standard Time",
    },
    {
        "offset": 2,
        "texto": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    },

    {
        "offset": 4,
        "texto": "(UTC+04:00) Abu Dhabi, Muscat",
    },
    {
        "offset": 5.5,
        "texto": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    },
    {
        "offset": 7,
        "texto": "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    },
    {
        "offset": 8,
        "texto": "(UTC+08:00) Perth",
    }
];

const ms_hora = 1000 * 60 * 60;

for(const zona of zonasHorarias){
    console.log(`${zona.texto}: ${calcularZonaHoraria(zona.offset)}`);
}

function calcularZonaHoraria(offset){
    const hoy = new Date();
    const utc = hoy.getTime();
    const zonaTiempo = new Date(utc + (offset * ms_hora));
    return zonaTiempo.toLocaleString();
}