export const checkoutFields=[
 {name:'email',label:'Email address',type:'email',placeholder:'you@example.com'},
 {name:'first',label:'First name',placeholder:'First name'},
 {name:'last',label:'Last name',placeholder:'Last name'},
 {name:'street',label:'Street address',placeholder:'Address line 1'},
 {name:'city',label:'City',placeholder:'City'},
 {name:'region',label:'State / region',placeholder:'State or region'},
 {name:'postal',label:'Postal code',placeholder:'Postal code'},
 {name:'country',label:'Country',placeholder:'Country'}
]
export function validateCheckout(info){
 const errors={}
 checkoutFields.forEach(f=>{if(!String(info[f.name]||'').trim())errors[f.name]='This field is required.'})
 if(info.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email))errors.email='Enter a valid email address.'
 if(info.postal&&info.postal.trim().length<3)errors.postal='Please enter a valid postal code.'
 return errors
}
