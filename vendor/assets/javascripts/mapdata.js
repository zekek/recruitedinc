var main_settings={
  //General settings
  width: 875,
  background_color: '#FFFFFF',  
  background_transparent: 'no',
  border_color: '#FFFFFF',
  label_color: '#d5ddec',
  hide_labels: 'no',
  auto_load: 'yes',
  pop_ups: 'detect', //on_click, on_hover, or detect

  //State defaults
  state_description:   '',
  state_color: '#88A4BC',
  state_hover_color: '#3B729F',
  state_url: '/colleges',
  all_states_inactive: 'no',
  
  //Location defaults
  location_description:  'Location description',
  location_color: '#FF0067',
  location_url: '',
  location_size: 15,
  location_type: 'square',
  all_locations_inactive: 'no' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
}

var state_specific={    
HI: {
  name: 'Hawaii',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=HI'
  },
AK: {
  name: 'Alaska',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=AK'
  },
FL: {
  name: 'Florida',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=FL',
  inactive: 'no'
  },
NH: {
  name: 'New Hampshire',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=NH'   
  },
VT: {
  name: 'Vermont',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=VT'
  },
ME: {
  name: 'Maine',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=ME' 
  },
RI: {
  name: 'Rhode Island',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=RI'   
  },
NY: {
  name: 'New York',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=NY' 
},
PA: {
  name: 'Pennsylvania',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=PA'       
  },
NJ: {
  name: 'New Jersey',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=NJ'       
  },
DE: {
  name: 'Delaware',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=DE'     
  },
MD: {
  name: 'Maryland',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=MD'           
  },
VA: {
  name: 'Virginia',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=VA'     
  },
WV: {
  name: 'West Virginia',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=WV'       
  },
OH: {
  name: 'Ohio',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=OH'   
  },
IN: {
  name: 'Indiana',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=IN'       
  },
IL: {
  name: 'Illinois',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=IL'     
  },
CT: {
  name: 'Connecticut',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=CT'       
  },
WI: {
  name: 'Wisconsin',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=WI'     
  },
NC: {
  name: 'North Carolina',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=NC'     
  },
DC: {
  name: 'District of Columbia',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=DC'
  },
MA: {
  name: 'Massachusetts',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=MA'       
  },
TN: {
  name: 'Tennessee',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=TN'   
  },
AR: {
  name: 'Arkansas',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=AR'     
  },
MO: {
  name: 'Missouri',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=MO'     
  },
GA: {
  name: 'Georgia',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=GA'     
  },
SC: {
  name: 'South Carolina',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=SC'     
  },
KY: {
  name: 'Kentucky',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=KY'     
  },
AL: {
  name: 'Alabama',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=AL'         
  },
LA: {
  name: 'Louisiana',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=LA'     
  },
MS: {
  name: 'Mississippi',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=MS'       
  },
IA: {
  name: 'Iowa',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=IA'     
  },
MN: {
  name: 'Minnesota',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=MN'
  },
OK: {
  name: 'Oklahoma',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=OK'     
  },
TX: {
  name: 'Texas',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=TX'     
  },
NM: {
  name: 'New Mexico',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=NM'   
  },
KS: {
  name: 'Kansas',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=KS'     
  },
NE: {
  name: 'Nebraska',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=NE'   
  },
SD: {
  name: 'South Dakota',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=SD'
  },
ND: {
  name: 'North Dakota',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=ND'
  },
WY: {
  name: 'Wyoming',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=WY'
  },
MT: {
  name: 'Montana',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=MT'
  },
CO: {
  name: 'Colorado',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=CO'
  },
UT: {
  name: 'Utah',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=UT'
  },
AZ: {
  name: 'Arizona',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=AZ'
  },
NV: {
  name: 'Nevada',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=NV'   
  },
OR: {
  name: 'Oregon',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=OR'   
  },
WA: {
  name: 'Washington',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=WA'       
  },
CA: {
  name: 'California',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=CA'         
  },
MI: {
  name: 'Michigan',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=MI'       
  },
ID: {
  name: 'Idaho',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=ID'
  },
// Territories - Hidden unless hide is set to "no"
GU: {
  name: 'Guam',
  description: 'Hi',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=',
  hide: 'yes'
  },
VI: {
  name: 'Virgin Islands',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=',
  hide: 'yes'
  },
PR: {
  name: 'Puerto Rico',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=',
  hide: 'yes'
  },
MP: {
  name: 'Northern Mariana Islands',
  description: 'default',
  color: 'default',
  hover_color: 'default',
  url: '/colleges?state=',
  hide: 'yes'
  }   
}

// You must number locations sequentially
var locations = {
}