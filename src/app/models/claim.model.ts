export interface Claim {
    _id?: any;
    claim_no: string;
    claim_type: string;
    claim_date: Date;
    product: string;
    status: string;
    status_color?: string;
}