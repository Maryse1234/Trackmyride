const PinPoint = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_907_76)">
                <path d="M10 0.3125C4.64973 0.3125 0.3125 4.64973 0.3125 10C0.3125 15.3503 4.64973 19.6875 10 19.6875C15.3503 19.6875 19.6875 15.3503 19.6875 10C19.6875 4.64973 15.3503 0.3125 10 0.3125ZM13.125 10C13.125 11.7231 11.7231 13.125 10 13.125C8.27688 13.125 6.875 11.7231 6.875 10C6.875 8.27688 8.27688 6.875 10 6.875C11.7231 6.875 13.125 8.27688 13.125 10Z" fill="#4B9BC6" />
            </g>
            <defs>
                <clipPath id="clip0_907_76">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}


const Dropoff = () => {
    return (
        <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.9375 15.4756V23.1265L7.0127 24.7388C7.24463 25.0864 7.75586 25.0864 7.98779 24.7388L9.0625 23.1265V15.4756C8.55518 15.5693 8.03418 15.625 7.5 15.625C6.96582 15.625 6.44482 15.5693 5.9375 15.4756ZM7.5 0C3.6167 0 0.46875 3.14795 0.46875 7.03125C0.46875 10.9145 3.6167 14.0625 7.5 14.0625C11.3833 14.0625 14.5312 10.9145 14.5312 7.03125C14.5312 3.14795 11.3833 0 7.5 0ZM7.5 3.71094C5.66895 3.71094 4.17969 5.20019 4.17969 7.03125C4.17969 7.35449 3.91699 7.61719 3.59375 7.61719C3.27051 7.61719 3.00781 7.35449 3.00781 7.03125C3.00781 4.5542 5.02344 2.53906 7.5 2.53906C7.82324 2.53906 8.08594 2.80176 8.08594 3.125C8.08594 3.44824 7.82324 3.71094 7.5 3.71094Z" fill="#4B9BC6" />
        </svg>

    )
}

const Location = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_907_134)">
<path d="M0 5.19696V17.222C0 17.615 0.396875 17.8838 0.761806 17.7379L5.55556 15.556V2.22266L0.698611 4.16536C0.492423 4.24783 0.31567 4.39018 0.191149 4.57406C0.066628 4.75793 4.93822e-05 4.97489 0 5.19696ZM6.66667 15.556L13.3333 17.7782V4.44488L6.66667 2.22266V15.556ZM19.2382 2.26293L14.4444 4.44488V17.7782L19.3014 15.8355C19.5076 15.7531 19.6844 15.6107 19.8089 15.4268C19.9334 15.243 20 15.026 20 14.8039V2.77891C20 2.38585 19.6031 2.1171 19.2382 2.26293Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_907_134">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}

const Time = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_907_136)">
<path d="M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM12.2305 13.9883L8.78516 11.4844C8.66406 11.3945 8.59375 11.2539 8.59375 11.1055V4.53125C8.59375 4.27344 8.80469 4.0625 9.0625 4.0625H10.9375C11.1953 4.0625 11.4062 4.27344 11.4062 4.53125V9.91016L13.8867 11.7148C14.0977 11.8672 14.1406 12.1602 13.9883 12.3711L12.8867 13.8867C12.7344 14.0938 12.4414 14.1406 12.2305 13.9883Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_907_136">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}

const Car = () => {
    return(
        <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /></svg>
    )
};

export { PinPoint, Dropoff , Location, Time, Car}