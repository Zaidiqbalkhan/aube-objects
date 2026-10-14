const finishes = {
  chalk: { id:'chalk', name:'Chalk', swatch:'#e7e1d5' },
  sand: { id:'sand', name:'Sand', swatch:'#bdb09a' },
  oat: { id:'oat', name:'Oat', swatch:'#d2bf9d' },
  moss: { id:'moss', name:'Moss', swatch:'#64715d' },
  ash: { id:'ash', name:'Ash', swatch:'#787770' },
  rust: { id:'rust', name:'Rust', swatch:'#ac6c54' },
}
const f = (...ids) => ids.map(id => finishes[id])
export const products = [
  {id:'arc-vase',name:'Arc Vessel',subtitle:'Sculptural stoneware',price:68,category:'Vessels',badge:'Bestseller',image:'roundVessel',gallery:['roundVessel','paleVessel'],colors:f('chalk','sand','moss'),stock:{chalk:8,sand:4,moss:0},description:'A gentle curve and a considered silhouette. Beautiful on its own, or holding a single branch.',material:'Matte-finished stoneware · Hand-wash recommended',dimensions:'H 21 × W 16 cm',featured:true},
  {id:'ritual-cups',name:'Ritual Cup Set',subtitle:'Everyday coffee companions',price:54,category:'Drinkware',badge:'',image:'pairMugs',gallery:['pairMugs','shelfMugs'],colors:f('chalk','ash'),stock:{chalk:12,ash:5},description:'Two tactile cups shaped for the slow first sip. Balanced, comfortable and quietly familiar.',material:'Glazed ceramic · Dishwasher safe',dimensions:'Set of 2 · 240 ml each',featured:true},
  {id:'still-life-vase',name:'Still Life Vase',subtitle:'An understated statement',price:86,category:'Vessels',badge:'New',image:'sculptural',gallery:['sculptural','hero'],colors:f('sand','chalk'),stock:{sand:6,chalk:3},description:'Organic, unhurried proportions with the subtle irregularity of a handmade object.',material:'Unglazed stoneware · Wipe clean',dimensions:'H 27 × W 14 cm',featured:true},
  {id:'petal-dish',name:'Petal Dish',subtitle:'Small moments, held',price:36,category:'Tableware',badge:'',image:'smallBowl',gallery:['smallBowl','linen'],colors:f('chalk','oat'),stock:{chalk:15,oat:9},description:'A little landing place for rings, sea salt, or whatever the day leaves behind.',material:'Stoneware · Food safe · Hand-wash',dimensions:'D 13 × H 4 cm',featured:true},
  {id:'quiet-morning',name:'Morning Cup',subtitle:'A cup to come back to',price:32,category:'Drinkware',badge:'',image:'morningMugs',gallery:['morningMugs','pairMugs'],colors:f('chalk','moss'),stock:{chalk:10,moss:6},description:'A generous shape and an easy grip. Familiar from the very first morning.',material:'Glazed ceramic · Dishwasher safe',dimensions:'310 ml',featured:false},
  {id:'hearth-vase',name:'Hearth Vase',subtitle:'Soft edges, warm presence',price:74,category:'Vessels',badge:'Low stock',image:'paleVessel',gallery:['paleVessel','roundVessel'],colors:f('ash','sand'),stock:{ash:2,sand:3},description:'Subtle texture and an almost architectural shape, for flowers or an empty shelf.',material:'Stoneware · Hand-wash recommended',dimensions:'H 24 × W 17 cm',featured:false},
  {id:'stem-jug',name:'Stem Pitcher',subtitle:'A small useful beauty',price:59,category:'Tableware',badge:'',image:'lavender',gallery:['lavender','linen'],colors:f('chalk','oat'),stock:{chalk:7,oat:4},description:'A petite pitcher for a few stems, a quiet table, or the kitchen counter.',material:'Glazed stoneware · Hand-wash',dimensions:'H 17 × W 11 cm',featured:false},
  {id:'linen-vessel',name:'Linen Vase',subtitle:'Texture in its simplest form',price:62,category:'Vessels',badge:'',image:'linen',gallery:['linen','candle'],colors:f('oat','chalk'),stock:{oat:9,chalk:0},description:'A soft, tactile surface inspired by the natural folds of linen.',material:'Stoneware · Wipe clean',dimensions:'H 19 × W 13 cm',featured:false},
  {id:'duo-cups',name:'Sunday Cup Pair',subtitle:'Made for long conversations',price:58,category:'Drinkware',badge:'',image:'shelfMugs',gallery:['shelfMugs','pairMugs'],colors:f('chalk','ash'),stock:{chalk:8,ash:8},description:'An easy pair of mugs that look as good on an open shelf as they feel in your hands.',material:'Glazed ceramic · Dishwasher safe',dimensions:'Set of 2 · 280 ml each',featured:false},
  {id:'softlight-vessel',name:'Softlight Vessel',subtitle:'A study in quiet form',price:92,category:'Vessels',badge:'Limited edition',image:'candle',gallery:['candle','sculptural'],colors:f('chalk','sand'),stock:{chalk:2,sand:1},description:'A simple form made compelling by the way light catches its edges.',material:'Matte stoneware · Wipe clean',dimensions:'H 30 × W 16 cm',featured:false},
]
export const categories = ['All objects','Vessels','Drinkware','Tableware']
export const getProduct = slug => products.find(p=>p.id===slug)
export const available = (p, color) => p.stock[color] || 0
