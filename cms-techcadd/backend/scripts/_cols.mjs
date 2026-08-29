import 'dotenv/config'
import mysql from 'mysql2/promise'
const c = await mysql.createConnection({host:process.env.DB_HOST,port:+process.env.DB_PORT,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_NAME})
for (const t of ['categories','courses','course_highlights','course_facts','faqs','faq_categories','testimonials','settings','gallery_albums','gallery_images','media','pages','blogs','events']) {
  const [rows] = await c.query(`SHOW COLUMNS FROM \`${t}\``)
  console.log(`--- ${t}`)
  console.log('   ' + rows.map(r=>`${r.Field}:${r.Type}${r.Null==='NO'?'!':''}${r.Default!==null?'='+r.Default:''}`).join('  '))
}
await c.end()
