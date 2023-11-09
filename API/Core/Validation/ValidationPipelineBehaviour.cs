using System.ComponentModel.DataAnnotations;
using FluentValidation;
using MediatR;
using ValidationException = FluentValidation.ValidationException;

namespace API.Middleware;

public class ValidationPipelineBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull
{
    private readonly IValidator<TRequest> _validator;

    public ValidationPipelineBehaviour(IValidator<TRequest> validator)
    {
        _validator = validator;
    }
    
    
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        var validationResult = await _validator.ValidateAsync(request);

        if (validationResult is not null && validationResult.IsValid is not true)
        {
            throw new ValidationException(validationResult.Errors);
        }

        return await next();
    }
}