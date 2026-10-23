import { useState } from 'react';
import './Menu.css';

const menuData = {
  Starters: [
    { name: 'Smoked Paneer Tikka', desc: 'House-made paneer, mustard marinade, coal-fired oven', price: '₹420' },
    { name: 'Kasundi Prawns', desc: 'Tiger prawns, Bengali mustard sauce, crispy curry leaf', price: '₹560' },
    { name: 'Crispy Lotus Stem', desc: 'Lotus root chips, tamarind glaze, chaat masala', price: '₹380' },
    { name: 'Charred Chicken Seekh', desc: 'Free-range mince, green herb chutney, pickled onion', price: '₹480' },
    { name: 'Avocado Chaat', desc: 'Ripe avocado, pomegranate, sev, date-tamarind', price: '₹440' },
    { name: 'Beetroot Tikki', desc: 'Garden beetroot, goat cheese, micro greens', price: '₹360' },
  ],
  Mains: [
    { name: 'Khaas Butter Chicken', desc: 'Slow-cooked in a wood-fired oven, smoked tomato makhani', price: '₹620' },
    { name: 'Slow-Cooked Dal Khaas', desc: '24-hour black lentil, ghee-tempered, wild garlic', price: '₹420' },
    { name: 'Rajasthani Laal Maas', desc: 'Mathania chilli, slow-braised lamb, rajasthani spices', price: '₹680' },
    { name: 'Malai Kofta', desc: 'Cottage cheese dumplings, cashew cream gravy, rose petal', price: '₹520' },
    { name: 'Kerala Fish Curry', desc: 'Coconut milk, raw mango, Malabar spices', price: '₹620' },
    { name: 'Banjara Gosht', desc: 'Nomadic-style mutton, charred onion, dried plum', price: '₹720' },
  ],
  Breads: [
    { name: 'Sourdough Naan', desc: '48-hour fermented dough, charcoal tandoor', price: '₹180' },
    { name: 'Truffle Garlic Naan', desc: 'Shaved truffle, aged butter, roasted garlic', price: '₹240' },
    { name: 'Roomali Roti', desc: 'Tissue-thin whole wheat, tawa-tossed', price: '₹120' },
    { name: 'Multigrain Roti', desc: 'Ancient grains, flaxseed, ghee-kissed', price: '₹140' },
    { name: 'Stuffed Paratha', desc: 'Seasonal filling, house pickle, cultured butter', price: '₹220' },
    { name: 'Lachha Paratha', desc: 'Layered whole wheat, slow-cooked on tawa', price: '₹160' },
  ],
  Desserts: [
    { name: 'Saffron Tres Leches', desc: 'Spanish sponge, Kashmiri saffron milk soak, pistachio', price: '₹320' },
    { name: 'Gulab Jamun Cheesecake', desc: 'Classic jamun, cream cheese, cardamom crust', price: '₹360' },
    { name: 'Cardamom Kulfi', desc: 'Slow-frozen malai, green cardamom, falooda threads', price: '₹280' },
    { name: 'Dark Chocolate Mithai', desc: '70% cocoa, paan mousse, edible gold leaf', price: '₹340' },
  ],
};

const tabs = Object.keys(menuData);

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Starters');
  const items = menuData[activeTab];

  return (
    <section className="menu" id="menu" aria-labelledby="menu-heading">
      <div className="container">
        <div className="menu__header">
          <span className="label">Signature Menu</span>
          <div className="divider" />
          <h2 id="menu-heading" className="menu__heading">A taste of KHAAS</h2>
          <p className="menu__subtext">
            Dishes that honour tradition and embrace the moment.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`menu-panel-${tab}`}
              id={`menu-tab-${tab}`}
              className={`menu__tab${activeTab === tab ? ' menu__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div
          id={`menu-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeTab}`}
          className="menu__grid"
        >
          {items.map((item) => (
            <article key={item.name} className="menu__item">
              <div className="menu__item-top">
                <h3 className="menu__item-name">{item.name}</h3>
                <span className="menu__item-price">{item.price}</span>
              </div>
              <p className="menu__item-desc">{item.desc}</p>
            </article>
          ))}
        </div>

        <p className="menu__note">
          All prices inclusive of taxes. Menu may change seasonally based on ingredient availability.
        </p>
      </div>
    </section>
  );
}
