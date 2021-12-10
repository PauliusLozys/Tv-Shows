using showsBackend.Models;
using System.Collections.Generic;

namespace showsBackend.Data
{
    public interface IShowRepo
    {
        bool SaveChanges();

        IEnumerable<Show> GetAllShows();
        Show GetShow(int id);
        void CreateShow(Show show);
        void UpdateShow(Show show);
        void DeleteShow(Show show);
    }
}
