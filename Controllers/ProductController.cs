using Microsoft.AspNetCore.Mvc;
using MVCUsingAjax.DataContext;
using MVCUsingAjax.Models;

namespace MVCUsingAjax.Controllers
{
    public class ProductController : Controller
    {
        private readonly ProductContext productContext;
        public ProductController(ProductContext product)
        {
            productContext = product;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult ProductList()
        {
            var data = productContext.ProductsTable.ToList();
            return new JsonResult(data);
        }

        [HttpPost]
        public JsonResult AddProduct(ProductModel model)
        {

            //var product = new ProductModel
            //{
            //    ProductName = model.ProductName,
            //    Price = model.Price,
            //    Quantity = model.Quantity,
            //    Category = model.Category,
            //};
            try
            {
                productContext.ProductsTable.Add(model);
                productContext.SaveChanges();
                return new JsonResult("Data is saved Successfully");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public IActionResult Delete(int id)
        {
            try
            {
                var data = productContext.ProductsTable.Where(e => e.productID == id).FirstOrDefault();
                productContext.ProductsTable.Remove(data);
                productContext.SaveChanges();
                return new JsonResult("Product Deleted");
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        
        public JsonResult Update(int id, ProductModel model)
        {
            var data = productContext.ProductsTable.Where(d => d.productID == id).FirstOrDefault();
            if (data != null)
            {
                data.ProductName = model.ProductName;
                data.Price = model.Price;
                data.Quantity = model.Quantity;
                data.Category = model.Category;
                productContext.SaveChanges();
                return new JsonResult("Record updated successfully");
            }
            else
            {
                return new JsonResult("couldnot update record");
            }
            
        }

       
    }
}
