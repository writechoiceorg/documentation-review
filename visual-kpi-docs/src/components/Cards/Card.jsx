import React from 'react'

export default function Card({ logo, name, linkTo, externalLink, description }) {
  const logoLink = logo && `https://raw.githubusercontent.com/transpara/documentation/main/visual-kpi-docs/static/img/setup-adm/interfaces/icons/${logo.toLowerCase()}.png`;
  
  if (linkTo || externalLink) {
    const classes = description ? 'link_card' : 'link_card title_only_card';
    
    return (
      <a className={classes} target={externalLink && '_blank'} href={linkTo}>
        {
          logo && <img src={logoLink} className="icon_img" alt={name}/>
        }
        <h3>{name}</h3>
        {
          description && <p>{description}</p>
        }
      </a>
    );
  }

  const classes = description ? 'icon_card' : 'icon_card title_only_card';

  return (
    <div className={classes}>
      <img src={logoLink} className="icon_img" alt={name}/>
      <h3 className={!description && "title-only-card"}>{name}</h3>
      {
        description && <p>{description}</p>
      }
    </div>
  );
};
