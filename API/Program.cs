using API.Auth;
using API.Core.Validation;
using API.Persistence;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication().AddBearerToken(IdentityConstants.BearerScheme);
builder.Services.AddAuthorizationBuilder();

// Register Auth DB.
builder.Services.AddDbContext<AuthContext>(options =>
{
    options.UseSqlite("Data Source=./auth.db");
});

builder.Services.AddIdentityCore<User>()
    .AddEntityFrameworkStores<AuthContext>()
    .AddApiEndpoints();

builder.Services.AddDbContext<FeedifyContext>(options =>
{
    options.UseSqlite("Data Source=./feedify.db");
    //options.UseNpgsql(configuration.GetConnectionString("localdb"));
});

builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));
builder.Services.AddValidatorsFromAssemblyContaining<Program>();
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationPipelineBehaviour<,>));
builder.Services.AddTransient<IUserAccessor, UserAccessor>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();

app.UseAuthorization();
app.MapGroup("auth").MapIdentityApi<User>();

app.MapControllers();



app.Run();