export function transType(num) {
    const types = [
        'general', 'academic', 'marketing', 'software development', 'business', 'others'
    ]
    return types[num];
}
export function formatPrice(num) {
    if(num <=0) {
        return 'free';
    } else {
        return '$' + num;
    }
}