using System;
using System.Linq;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CRUDAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private DataContext db = new DataContext();

        [Produces("application/json")]
        [HttpGet("findall")]
        public IActionResult FindAll()
        {
            try
            {
                var products = db.Products.ToList();
                return Ok(products);
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("find/{id}")]
        public IActionResult Find(string id)
        {
            try
            {
                var product = db.Products.SingleOrDefault(p => p.Id == id);
                return Ok(product);
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        [Produces("application/json")]
        [Consumes("application/json")]
        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] Product product)
        {
            try
            {
                await db.Products.AddAsync(product);
                await db.SaveChangesAsync();
                return Ok(product);
            }
            catch (Exception e)
            {

               return BadRequest();
            }
        }

        [Produces("application/json")]
        [Consumes("application/json")]
        [HttpPut("update")]
        public async Task<IActionResult> Update([FromBody] Product product)
        {
            try
            {
                db.Entry(product).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await db.SaveChangesAsync(); 
                return Ok(product);
            }
            catch (Exception e)
            {

               return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpDelete("delete/{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                db.Remove(db.Products.Find(id));
                db.SaveChanges();
                return Ok("deleted!");
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }
    }
}