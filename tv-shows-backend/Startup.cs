using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using showsBackend.Data;
using showsBackend.Models;

namespace showsBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<TvShowContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("WebApiDatabase")));

            services.AddControllers();
            services.AddCors();
            //services.AddScoped<IShowRepo, MockShowRepo>();
            services.AddScoped<IShowRepo, SQLShowRepo>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, TvShowContext tvShowContext)
        {
            tvShowContext.Database.Migrate();
            SeedShowsTable(tvShowContext);


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(x => x
             .AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void SeedShowsTable(TvShowContext db)
        {
            if (db.Shows.Find(1) != null) // If already has data
                return;

            var shows = new List<Show>
            {
                new Show{ Name="The epic TV Show", Description = "A very good tv show to watch with kid" },
                new Show{ Name="Regular Show", Description = "Weird bird and racoon do things" },
                new Show{ Name="Ebinium", Description = "Very ebin show :DDDddd" }
            };

            db.Shows.AddRange(shows);
            db.SaveChanges();
        }

    }
}
