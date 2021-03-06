{
    BSNullOptimization = objectThatDelegatesTo(OMeta, 
    {"setHelped": function(){
        var $elf = this, _fromIdx = this.input.idx;
        
        return (this["_didSomething"] = true);
    }
    , "helped": function(){
        var $elf = this, _fromIdx = this.input.idx;
        
        return this._pred(this["_didSomething"]);
    }
    , "trans": function(){
        var $elf = this, _fromIdx = this.input.idx, t, ans;
        return (function(){
            this._form((function(){
                return (function(){
                    t = this._apply("anything");
                    this._pred((this[t] != undefined));
                    return ans = this._applyWithArgs("apply", t);
                }).call(this);
            }));
            
            return ans;
        }).call(this);
    }
    , "optimize": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            this._apply("helped");
            
            return x;
        }).call(this);
    }
    , "App": function(){
        var $elf = this, _fromIdx = this.input.idx, rule, args;
        return (function(){
            rule = this._apply("anything");
            args = this._many((function(){
                return this._apply("anything");
            }));
            
            return["App", rule].concat(args);
        }).call(this);
    }
    , "Act": function(){
        var $elf = this, _fromIdx = this.input.idx, expr;
        return (function(){
            expr = this._apply("anything");
            
            return["Act", expr];
        }).call(this);
    }
    , "Pred": function(){
        var $elf = this, _fromIdx = this.input.idx, expr;
        return (function(){
            expr = this._apply("anything");
            
            return["Pred", expr];
        }).call(this);
    }
    , "Or": function(){
        var $elf = this, _fromIdx = this.input.idx, xs;
        return (function(){
            xs = this._many((function(){
                return this._apply("trans");
            }));
            
            return["Or"].concat(xs);
        }).call(this);
    }
    , "XOr": function(){
        var $elf = this, _fromIdx = this.input.idx, xs;
        return (function(){
            xs = this._many((function(){
                return this._apply("trans");
            }));
            
            return["XOr"].concat(xs);
        }).call(this);
    }
    , "And": function(){
        var $elf = this, _fromIdx = this.input.idx, xs;
        return (function(){
            xs = this._many((function(){
                return this._apply("trans");
            }));
            
            return["And"].concat(xs);
        }).call(this);
    }
    , "Opt": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["Opt", x];
        }).call(this);
    }
    , "Many": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["Many", x];
        }).call(this);
    }
    , "Many1": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["Many1", x];
        }).call(this);
    }
    , "Set": function(){
        var $elf = this, _fromIdx = this.input.idx, n, v;
        return (function(){
            n = this._apply("anything");
            v = this._apply("trans");
            
            return["Set", n, v];
        }).call(this);
    }
    , "Not": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["Not", x];
        }).call(this);
    }
    , "Lookahead": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["Lookahead", x];
        }).call(this);
    }
    , "Form": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["Form", x];
        }).call(this);
    }
    , "ConsBy": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["ConsBy", x];
        }).call(this);
    }
    , "IdxConsBy": function(){
        var $elf = this, _fromIdx = this.input.idx, x;
        return (function(){
            x = this._apply("trans");
            
            return["IdxConsBy", x];
        }).call(this);
    }
    , "JumpTable": function(){
        var $elf = this, _fromIdx = this.input.idx, c, e, ces;
        return (function(){
            ces = this._many((function(){
                return (function(){
                    this._form((function(){
                        return (function(){
                            c = this._apply("anything");
                            return e = this._apply("trans");
                        }).call(this);
                    }));
                    return[c, e];
                }).call(this);
            }));
            
            return["JumpTable"].concat(ces);
        }).call(this);
    }
    , "Interleave": function(){
        var $elf = this, _fromIdx = this.input.idx, m, p, xs;
        return (function(){
            xs = this._many((function(){
                return (function(){
                    this._form((function(){
                        return (function(){
                            m = this._apply("anything");
                            return p = this._apply("trans");
                        }).call(this);
                    }));
                    return[m, p];
                }).call(this);
            }));
            
            return["Interleave"].concat(xs);
        }).call(this);
    }
    , "Rule": function(){
        var $elf = this, _fromIdx = this.input.idx, name, ls, body;
        return (function(){
            name = this._apply("anything");
            ls = this._apply("anything");
            body = this._apply("trans");
            return["Rule", name, ls, body];
        }).call(this);
    }
    });
    
    (BSNullOptimization["initialize"] = (function(){
        (this["_didSomething"] = false);
    }));
    BSAssociativeOptimization = objectThatDelegatesTo(BSNullOptimization, 
    {"And": function(){
        var $elf = this, _fromIdx = this.input.idx, x, xs;
        return this._or((function(){
            return (function(){
                x = this._apply("trans");
                this._apply("end");
                this._apply("setHelped");
                return x;
            }).call(this);
        }), (function(){
            return (function(){
                xs = this._applyWithArgs("transInside", "And");
                
                return["And"].concat(xs);
            }).call(this);
        }));
    }
    , "Or": function(){
        var $elf = this, _fromIdx = this.input.idx, x, xs;
        return this._or((function(){
            return (function(){
                x = this._apply("trans");
                this._apply("end");
                this._apply("setHelped");
                return x;
            }).call(this);
        }), (function(){
            return (function(){
                xs = this._applyWithArgs("transInside", "Or");
                
                return["Or"].concat(xs);
            }).call(this);
        }));
    }
    , "XOr": function(){
        var $elf = this, _fromIdx = this.input.idx, x, xs;
        return this._or((function(){
            return (function(){
                x = this._apply("trans");
                this._apply("end");
                this._apply("setHelped");
                return x;
            }).call(this);
        }), (function(){
            return (function(){
                xs = this._applyWithArgs("transInside", "XOr");
                
                return["XOr"].concat(xs);
            }).call(this);
        }));
    }
    , "transInside": function(){
        var $elf = this, _fromIdx = this.input.idx, t, xs, ys, x;
        return (function(){
            t = this._apply("anything");
            return this._or((function(){
                return (function(){
                    this._form((function(){
                        return (function(){
                            this._applyWithArgs("exactly", t);
                            return xs = this._applyWithArgs("transInside", t);
                        }).call(this);
                    }));
                    ys = this._applyWithArgs("transInside", t);
                    this._apply("setHelped");
                    return xs.concat(ys);
                }).call(this);
            }), (function(){
                return (function(){
                    x = this._apply("trans");
                    xs = this._applyWithArgs("transInside", t);
                    return[x].concat(xs);
                }).call(this);
            }), (function(){
                return[];
            }));
        }).call(this);
    }
    });
    BSSeqInliner = objectThatDelegatesTo(BSNullOptimization, 
    {"App": function(){
        var $elf = this, _fromIdx = this.input.idx, s, cs, rule, args;
        return this._or((function(){
            return (function(){
                switch (this._apply('anything')){
                    case "seq": 
                        return (function(){
                            s = this._apply("anything");
                            this._apply("end");
                            cs = this._applyWithArgs("seqString", s);
                            this._apply("setHelped");
                            return["And"].concat(cs).concat([["Act", s]]);
                        }).call(this);
                    default: 
                        throw fail;
                }
            }).call(this);
        }), (function(){
            return (function(){
                rule = this._apply("anything");
                args = this._many((function(){
                    return this._apply("anything");
                }));
                
                return["App", rule].concat(args);
            }).call(this);
        }));
    }
    , "inlineChar": function(){
        var $elf = this, _fromIdx = this.input.idx, c;
        return (function(){
            c = this._applyWithArgs("foreign", BSOMetaParser, 'eChar');
            this._not((function(){
                return this._apply("end");
            }));
            
            return["App", "exactly", c.toProgramString()];
        }).call(this);
    }
    , "seqString": function(){
        var $elf = this, _fromIdx = this.input.idx, s, cs;
        return (function(){
            this._lookahead((function(){
                return (function(){
                    s = this._apply("anything");
                    return this._pred(((typeof s) === "string"));
                }).call(this);
            }));
            return this._or((function(){
                return (function(){
                    this._form((function(){
                        return (function(){
                            this._applyWithArgs("exactly", "\"");
                            cs = this._many((function(){
                                return this._apply("inlineChar");
                            }));
                            return this._applyWithArgs("exactly", "\"");
                        }).call(this);
                    }));
                    return cs;
                }).call(this);
            }), (function(){
                return (function(){
                    this._form((function(){
                        return (function(){
                            this._applyWithArgs("exactly", "\'");
                            cs = this._many((function(){
                                return this._apply("inlineChar");
                            }));
                            return this._applyWithArgs("exactly", "\'");
                        }).call(this);
                    }));
                    return cs;
                }).call(this);
            }));
        }).call(this);
    }
    });
    
    (JumpTable = (function(choiceOp, choice){
        (this["choiceOp"] = choiceOp);
        (this["choices"] = ({}));
        this.add(choice);
    }));
    
    (JumpTable["prototype"]["add"] = (function(choice){
            {
            var c = choice[(0)];
            var t = choice[(1)];
        }
        if (this["choices"][c]){
            if ((this["choices"][c][(0)] == this["choiceOp"])){
                this["choices"][c].push(t);
            }
            else {
                (this["choices"][c] =[this["choiceOp"], this["choices"][c], t]);
            }
        }
        else {
            (this["choices"][c] = t);
        }
    }));
    
    (JumpTable["prototype"]["toTree"] = (function(){
            {
            var r =["JumpTable"];
            var choiceKeys = ownPropertyNames(this["choices"]);
        }
        for (var i = (0);(i < choiceKeys["length"]);(i += (1))){
            r.push([choiceKeys[i], this["choices"][choiceKeys[i]]]);
        }
        return r;
    }));
    BSJumpTableOptimization = objectThatDelegatesTo(BSNullOptimization, 
    {"Or": function(){
        var $elf = this, _fromIdx = this.input.idx, cs;
        return (function(){
            cs = this._many((function(){
                return this._or((function(){
                    return this._applyWithArgs("jtChoices", "Or");
                }), (function(){
                    return this._apply("trans");
                }));
            }));
            
            return["Or"].concat(cs);
        }).call(this);
    }
    , "XOr": function(){
        var $elf = this, _fromIdx = this.input.idx, cs;
        return (function(){
            cs = this._many((function(){
                return this._or((function(){
                    return this._applyWithArgs("jtChoices", "XOr");
                }), (function(){
                    return this._apply("trans");
                }));
            }));
            
            return["XOr"].concat(cs);
        }).call(this);
    }
    , "quotedString": function(){
        var $elf = this, _fromIdx = this.input.idx, c, cs;
        return (function(){
            this._lookahead((function(){
                return this._apply("string");
            }));
            this._form((function(){
                return (function(){
                    switch (this._apply('anything')){
                        case "\"": 
                            return (function(){
                                cs = this._many((function(){
                                    return (function(){
                                        c = this._applyWithArgs("foreign", BSOMetaParser, 'eChar');
                                        this._not((function(){
                                            return this._apply("end");
                                        }));
                                        return c;
                                    }).call(this);
                                }));
                                return this._applyWithArgs("exactly", "\"");
                            }).call(this);
                        case "\'": 
                            return (function(){
                                cs = this._many((function(){
                                    return (function(){
                                        c = this._applyWithArgs("foreign", BSOMetaParser, 'eChar');
                                        this._not((function(){
                                            return this._apply("end");
                                        }));
                                        return c;
                                    }).call(this);
                                }));
                                return this._applyWithArgs("exactly", "\'");
                            }).call(this);
                        default: 
                            throw fail;
                    }
                }).call(this);
            }));
            
            return cs.join("");
        }).call(this);
    }
    , "jtChoice": function(){
        var $elf = this, _fromIdx = this.input.idx, x, rest;
        return this._or((function(){
            return (function(){
                this._form((function(){
                    return (function(){
                        this._applyWithArgs("exactly", "And");
                        this._form((function(){
                            return (function(){
                                this._applyWithArgs("exactly", "App");
                                this._applyWithArgs("exactly", "exactly");
                                return x = this._apply("quotedString");
                            }).call(this);
                        }));
                        return rest = this._many((function(){
                            return this._apply("anything");
                        }));
                    }).call(this);
                }));
                return[x,["And"].concat(rest)];
            }).call(this);
        }), (function(){
            return (function(){
                this._form((function(){
                    return (function(){
                        this._applyWithArgs("exactly", "App");
                        this._applyWithArgs("exactly", "exactly");
                        return x = this._apply("quotedString");
                    }).call(this);
                }));
                
                return[x,["Act", x.toProgramString()]];
            }).call(this);
        }));
    }
    , "jtChoices": function(){
        var $elf = this, _fromIdx = this.input.idx, op, c, jt;
        return (function(){
            op = this._apply("anything");
            c = this._apply("jtChoice");
            jt = new JumpTable(op, c);
            this._many((function(){
                return (function(){
                    c = this._apply("jtChoice");
                    return jt.add(c);
                }).call(this);
            }));
            this._apply("setHelped");
            return jt.toTree();
        }).call(this);
    }
    });
    BSOMetaOptimizer = objectThatDelegatesTo(OMeta, 
    {"optimizeGrammar": function(){
        var $elf = this, _fromIdx = this.input.idx, n, sn, rs;
        return (function(){
            this._form((function(){
                return (function(){
                    this._applyWithArgs("exactly", "Grammar");
                    n = this._apply("anything");
                    sn = this._apply("anything");
                    return rs = this._many((function(){
                        return this._apply("optimizeRule");
                    }));
                }).call(this);
            }));
            
            return["Grammar", n, sn].concat(rs);
        }).call(this);
    }
    , "optimizeRule": function(){
        var $elf = this, _fromIdx = this.input.idx, r;
        return (function(){
            r = this._apply("anything");
            this._or((function(){
                return r = this._applyWithArgs("foreign", BSSeqInliner, 'optimize', r);
            }), (function(){
                return this._apply("empty");
            }));
            this._many((function(){
                return this._or((function(){
                    return r = this._applyWithArgs("foreign", BSAssociativeOptimization, 'optimize', r);
                }), (function(){
                    return r = this._applyWithArgs("foreign", BSJumpTableOptimization, 'optimize', r);
                }));
            }));
            return r;
        }).call(this);
    }
    });
}
 
