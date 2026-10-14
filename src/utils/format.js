export const money = value => new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0}).format(value)
export const deliveryEstimate = subtotal => subtotal >= 150 ? 0 : 12
export const cartKey = (id, color) => `${id}::${color}`
