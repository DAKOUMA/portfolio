function Icon(props) {
    const envelope = (<svg width={props.size.w} height={props.size.h} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={props.fill} d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>)
    const instagram = (<svg width={props.size.w} height={props.size.h} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={props.fill} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>)
    const linkedin = (<svg width={props.size.w} height={props.size.h} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={props.fill} d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>)
    const whatsapp = (<svg width={props.size.w} height={props.size.h} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={props.fill} d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>)
    const bars = (<svg  height={props.size.h} width={props.size.w} fill="none" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill={props.fill} stroke-width="2" stroke-height="2"  d="M16 4.75h12c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-12c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM28 27.25h-24c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h24c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM28 19.25h-12c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h12c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM28 11.25h-24c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h24c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path></svg>)
    const home = (<svg width={props.size.w} height={props.size.h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9.5L12 4L21 9.5" stroke={props.fill} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke={props.fill} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 16H14" stroke={props.fill} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>)
    const sun = (<svg width={props.size.w} height={props.size.h} viewBox="0 0 24 24" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
                    <g id="Environment / Sun">
                    <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>)
    const moon = (<svg  height={props.size.h} width={props.size.w} viewBox="0 0 24 24" id="moon-alt" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path fill={props.fill} id="primary" d="M21,12A9,9,0,0,1,3.25,14.13,6.9,6.9,0,0,0,8,16,7,7,0,0,0,11.61,3H12A9,9,0,0,1,21,12Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>)


    let sortie = '';

    switch (props.rendue) {
        case "envelope": sortie = envelope;
            break;

        case "instagram": sortie = instagram;
            break;
        
        case "likedin": sortie = linkedin;
            break;

        case "whatsapp": sortie = whatsapp;
            break;

        case "bars": sortie = bars;
            break;
        
        case "home": sortie = home;
            break;

        case "sun": sortie = sun;
            break;

        case "moon": sortie = moon;
            break;
    
        default: sortie = (<div>error</div>)
    }

    return sortie
}

export {Icon};