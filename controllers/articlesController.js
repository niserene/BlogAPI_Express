const User = require('../models/userModel')
const Article = require('../models/articleModel')
const {validateEmail, errJson} = require('../utils/email')
const { hashPassword, matchPassword } = require('../utils/password')
const { getUser } = require('../utils/security')
const { getToken } = require('../utils/jwt')
const { slugify } = require('../utils/stringUtil')
const { response } = require('express')

function ArticleData({title, description, body, tagList}){
    this.title = title
    this.description = description
    this.body = body
    this.tagList = tagList
}

const articlesController = {
    
    createArticle: async(req, res, next)=>{
        
        var article = req.body.article
        if(!article)
            return res.status(442).json(errJson("Invalid Data Sequence"))

        var newArticle = new ArticleData({...article})
        
        const email = req.user.email
        
        const slug = slugify(newArticle.title)
        
        const user = await User.findOne({email})
        .then(result =>{
            if(!result)
                return res.status(400).json(errJson("Invalid User"))
            return result
        })
        
        Article.findOne({'slug':slug})
        .then(result => {
    
            if(result)
                return res.status(400).json(errJson("Article already Exist With Same Slug"));
    
            newArticle.slug = slug
            newArticle.author = user._id
            Article({...newArticle})
            .save()
            .then(result=>{
    
                result.populate('author')
                .then(result =>{

                    var article = result
                    result.author = getUser(article.author)
                    return res.status(201).json({article})
                
                }, err=> next(err))
            
            }, err=>next(err))
            
        }, err=>next(err))
    
    },

    deleteArticle : (req, res, next)=>{
        
    },

    updateArticle : (req, res, next)=>{

    },

    getAllArticles : (req, res, next)=>{

    },

    getFeedArticles: (req, res, next)=>{

    },

    getArticleBySlug : (req, res, next)=>{

    }

}

module.exports = articlesController