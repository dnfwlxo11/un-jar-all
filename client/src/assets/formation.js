export const static_formation = {
    "formation_3-4-3": ["ST", "LF", "RF", "LM", "LCM", "RCM", "RM", "LCB", "CB", "RCB", "GK"],
    "formation_3-4-1-2": ["LS", "RS", "CAM", "LM", "LCM", "RCM", "RM", "LCB", "CB", "RCB", "GK"],
    "formation_3-2-3-2": ["ST", "CF", "LM", "CM", "RM", "LDM", "RDM", "LCB", "CB", "RCB", "GK"],
    "formation_3-2-2-1-2": ["LS", "RS", "CAM", "LM", "LDM", "RDM", "RM", "LCB", "CB", "RCB", "GK"],
    "formation_4-4-2": ["ST", "CF", "LM", "LCM", "RCM", "RM", "LB", "LCB", "RCB", "RB", "GK"],
    "formation_4-2-2-2": ["LS", "RS", "LM", "LDM", "RDM", "RM", "LB", "LCB", "RCB", "RB", "GK"],
    "formation_4-1-2-3": ["LW", "ST", "RW", "LCM", "CDM", "RCM", "LB", "LCB", "RCB", "RB", "GK"],
    "formation_5-3-2": ["LS", "RS", "LCM", "CM", "RCM", "LWB", "LCB", "CB", "RCB", "RWB", "GK"],
    "formation_5-2-3": ["LW", "ST", "RW", "LCM", "RCM", "LWB", "LCB", "CB", "RCB", "RWB", "GK"]
}

export const static_position = {
    "LW": { x: 0, y: 0, h: 200, w: 125, type: "full", player: null, role: 1 },
    "RW": { x: 375, y: 0, h: 200, w: 125, type: "full", player: null, role: 1 },

    "LS": { x: 125, y: 0, h: 100, w: 83.4, type: "horizonthird", player: null, role: 1 },
    "ST": { x: 208.4, y: 0, h: 100, w: 83.4, type: "horizonthird", player: null, role: 1 },
    "RS": { x: 291.7, y: 0, h: 100, w: 83.4, type: "horizonthird", player: null, role: 1 },

    "LF": { x: 125, y: 100, h: 100, w: 83.4, type: "horizonthird", player: null, role: 1 },
    "CF": { x: 208.4, y: 100, h: 100, w: 83.4, type: "horizonthird", player: null, role: 1 },
    "RF": { x: 291.7, y: 100, h: 100, w: 83.4, type: "horizonthird", player: null, role: 1 },

    "LM": { x: 0, y: 200, h: 150, w: 125, type: "threethird", player: null, role: 2 },
    "RM": { x: 375, y: 200, h: 150, w: 125, type: "threethird", player: null, role: 2 },

    "LAM": { x: 125, y: 200, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },
    "CAM": { x: 208.4, y: 200, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },
    "RAM": { x: 291.7, y: 200, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },

    "LCM": { x: 125, y: 266.7, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },
    "CM": { x: 208.3, y: 266.7, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },
    "RCM": { x: 291.7, y: 266.7, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },

    "LDM": { x: 125, y: 333.4, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },
    "CDM": { x: 208.4, y: 333.4, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },
    "RDM": { x: 291.7, y: 333.4, h: 66.7, w: 83.4, type: "horizonthird2", player: null, role: 2 },

    "LWB": { x: 0, y: 350, h: 50, w: 125, type: "quarter", player: null, role: 3 },
    "RWB": { x: 375, y: 350, h: 50, w: 125, type: "quarter", player: null, role: 3 },

    "LCB": { x: 125, y: 400, h: 100, w: 83.4, type: "horizonthird", player: null, role: 3 },
    "CB": { x: 208.4, y: 400, h: 100, w: 83.4, type: "horizonthird", player: null, role: 3 },
    "RCB": { x: 291.7, y: 400, h: 100, w: 83.4, type: "horizonthird", player: null, role: 3 },

    "LB": { x: 0, y: 400, h: 100, w: 125, type: "half", player: null, role: 3 },
    "RB": { x: 375, y: 400, h: 100, w: 125, type: "half", player: null, role: 3 },
    
    "GK": { x: 187.5, y: 500, h: 100, w: 125, type: "half", player: null, role: 4 },
}