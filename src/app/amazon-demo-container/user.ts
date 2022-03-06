export class User{
    id!: string;
    type!: string;
    userCountry!: string;
    highbandWidth!: boolean;
    cookieEnabled!: boolean;
    platform!: string;
    referrer!: string;
    userAgent!: string;
    doNotTrack!: string | null;
    language!: string;
    action!:string;
    description!: string;
    nodeName!: string;
    title!: string;
    url!: string;
    time!: string;
    ipAddress!: string;
    city!: string;
    country!: string;
    location!:string;
    postal!:string;
    region!:string;
    timezone!:string;
    connection!: Connection;
    readonly languages!: Array<string>;
    pdfViewerEnabled!: boolean;
    onLine!: boolean;
    plugins!:Plugin;
    vendor!: string;
    javaEnabled!:boolean;
    browser!:string;
    browser_version!:string;
    device!:string;
    deviceType!:string;
    orientation!:string;
    os!:string;
    os_version!:string;
    isDesktop!:boolean;
    isTablet!:boolean;
    isPhone!:boolean;
    requestId!:string;
    visitorFound!:boolean;
}

export class Plugin{
    name!: string;    
}

export class Connection{
    downlink!:string;
    effectiveType!:string;
    rtt!: string;
    saveData!:string;
}