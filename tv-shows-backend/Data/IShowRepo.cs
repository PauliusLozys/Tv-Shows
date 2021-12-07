using showsBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace showsBackend.Data
{
    public interface IShowRepo
    {
        IEnumerable<Show> GetShows();
        Show GetShow(int id);
    }
}
