using showsBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace showsBackend.Data
{
    public class MockShowRepo : IShowRepo
    {
        public Show GetShow(int id)
        {
            return new Show()
            {
                Id = 69,
                Name = "The penis show from backend",
                Description = "Backend getShow()"
            };
        }

        public IEnumerable<Show> GetShows()
        {
            return new List<Show>
            {
                new Show() { Id = 1, Name="Test1", Description="backend" },
                new Show() { Id = 2, Name="Test2", Description="backend" },
                new Show() { Id = 3, Name="Test3", Description="backend" },
                new Show() { Id = 4, Name="Test4", Description="backend" }
            };
        }
    }
}
