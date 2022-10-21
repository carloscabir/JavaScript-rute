export function Post(props) {
  let { date, title, content } = props,
    dateFormat = new Date(date).toLocaleDateString();

  return `
  <section class="post-page">
  <aside>
  <h2>${title.rendered}</h2>
  <time datetime="2020-12-12">${dateFormat}</time>
  </aside>
  <hr>
  <article>
  ${content.rendered}
  </article>
  </section>
  `;
}
