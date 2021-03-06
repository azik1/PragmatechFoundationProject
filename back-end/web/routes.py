from flask import Blueprint,render_template,redirect,request,flash,url_for
from app.models import AboutMe
from app.models import Services
from app.models import Pricing
from app.models import PricingCategory
from app.models import Experience
from app.models import Education
from app.models import DesignSkills
from app.models import LanguageSkills
from app.models import CodingSkills
from app.models import Reviews
from app.models import Clients
from app.models import Contact
from app.models import Portfolio,PortfolioCategory,PortfolioImages,PortfolioModal
from app import app,db
web_bp=Blueprint('web',__name__,static_folder='static',template_folder='templates',static_url_path='web/static',url_prefix='/')

@web_bp.route('/')
def admin_index():
    Abouts=AboutMe.query.all()
    services=Services.query.all()
    Pricings=Pricing.query.all()
    Pricingcategories=PricingCategory.query.all()
    Experiences=Experience.query.all()
    Educations=Education.query.all()
    Designskills=DesignSkills.query.all()
    Languageskills=LanguageSkills.query.all()
    Codingskills=CodingSkills.query.all()
    i_reviews=Reviews.query.all()
    i_clients=Clients.query.all()
    i_categories=PortfolioCategory.query.all()
    i_portfolios=Portfolio.query.all()
    i_images=PortfolioImages.query.all()
    i_modals=PortfolioModal.query.all()
    return render_template('web/index.html',Abouts=Abouts,services=services,Pricings=Pricings,Pricingcategories=Pricingcategories,Experiences=Experiences,Educations=Educations,Designskills=Designskills,Languageskills=Languageskills,Codingskills=Codingskills,i_reviews=i_reviews,i_clients=i_clients,i_categories=i_categories,i_portfolios=i_portfolios,i_images=i_images,i_modals=i_modals)

@web_bp.route('/',methods=['GET','POST'])
def contact_form():
    if request.method=='POST':
        contacts=Contact(
            fullname=request.form['fullname'],
            email=request.form['email'],
            message=request.form['message']
        )
        db.session.add(contacts)
        db.session.commit()
        flash('Mesajınız üçün təşəkkür edirik. Göndərildi.')
        return redirect('/admin/contact/')
    return render_template('web/index.html')

@web_bp.route('/admin/contact/')
def contact():
    t_contacts=Contact.query.all()
    return render_template('/admin/contact.html',t_contacts=t_contacts)

@web_bp.route('/contact/details/<id>')
def contact_details(id):
    gosterilecekOlanMessage=Contact.query.get(id)
    return render_template('admin/contact_single.html',t_contact=gosterilecekOlanMessage)

@web_bp.route('/contact/delete/<id>')
def contact_delete(id):
    silinecekOlanContact=Contact.query.get(id)
    db.session.delete(silinecekOlanContact)
    db.session.commit()
    return redirect('/admin/contact/')
