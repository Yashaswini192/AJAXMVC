using Microsoft.EntityFrameworkCore;
using MVCUsingAjax.Models;

namespace MVCUsingAjax.DataContext
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions options) : base(options) 
        {
            
        }

        public DbSet<ProductModel> ProductsTable { get; set; }
    }
}
